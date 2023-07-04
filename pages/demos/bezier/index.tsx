import { useState, useRef, MouseEvent } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from "components/Appbar";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Head from 'next/head';
import { Point } from "rulyotano.math.geometry";
import { BezierInterpolation } from "rulyotano.math.interpolation.bezier";
import { Helpers } from "rulyotano.math.geometry";
import Typography from "@material-ui/core/Typography";
import Link from "components/Link";

export default function App() {
  const classes = useStyles();
  const [smooth, setSmooth] = useState(0.8);
  const canvasRef = useRef<SVGSVGElement | null>(null);
  const [isClosed, setIsClosed] = useState(false);
  const [dragginIndex, setDraggingIndex] = useState<number | null>(null);
  const initialPoints = [
    new Point(60, 60),
    new Point(7, 9),
    new Point(20, 50),
    new Point(90, 90),
    new Point(190, 40)
  ];
  const [points, setPoints] = useState(initialPoints);
  const path = BezierInterpolation.bezierToPath(
    BezierInterpolation.pointsToBezierCurves(points, isClosed, smooth)
  );

  const onSmoothChange = (newSmoothValue: number) => {
    setSmooth(newSmoothValue);
  };

  const onIsClosedChange = (newIsClosed: boolean) => {
    setIsClosed(newIsClosed);
  };

  const getPointFromMouseEventCoordinates = (x: number, y: number) => {
    const canvas = canvasRef.current;
    const boundingClient = canvas?.getBoundingClientRect();
    return new Point(x - boundingClient!.left, y - boundingClient!.top);
  };

  const onAddPoint = (x: number, y: number) => {
    const newPoint = getPointFromMouseEventCoordinates(x, y);
    const bestIndexToInsert = Helpers.bestPlaceToInsertPoint(newPoint, points);

    setPoints([...points.slice(0, bestIndexToInsert),
      newPoint,
    ...points.slice(bestIndexToInsert)]);
  };

  const onClear = () => {
    setPoints(initialPoints);
  };

  const onPointDragStart = (pointIndex: number) => {
    if (dragginIndex !== null) return;
    setDraggingIndex(pointIndex);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1 && dragginIndex !== null) {
      setPoints([
        ...points.slice(0, dragginIndex),
        getPointFromMouseEventCoordinates(e.clientX, e.clientY),
        ...points.slice(dragginIndex + 1)
      ]);
    }
  };

  const onMouseUp = (e: MouseEvent) => {
    if (dragginIndex !== null) {
      setDraggingIndex(null);
    } else {
      onAddPoint(e.clientX, e.clientY);
    }
  };

  const onPointMouseUp = (e: MouseEvent, pointIndex: number) => {
    if (dragginIndex === null) {
      setPoints([
        ...points.slice(0, pointIndex),
        ...points.slice(pointIndex + 1)
      ]);
      e.stopPropagation();
    }
  };

  return (
    <div>
      <Head>
        <title>Demo interpolate with Bezier curves</title>
      </Head>
      <AppBar parent="/" />
      <Container maxWidth="md">
        <Box m={4} />

        <Typography variant="h2" component="h1" gutterBottom align="center">
          Demo interpolate with Bezier curves
        </Typography>

        <Box m={4} />

        <Typography variant="body1">
          This is to demonstrate how we can use the <Link naked target="_blank" href="https://github.com/rulyotano/rulyotano.crosscutting.js/tree/main/src/rulyotano.math.interpolation.bezier">rulyotano.math.interpolation.bezier</Link> library to draw a curve that pass through a set of ordered points.
        </Typography>
        <Typography variant="body1">
          You can find this <Link naked target="_blank" href="https://github.com/rulyotano/mui-profile/blob/master/pages/demos/bezier/index.tsx">demo's code base in here</Link>.
        </Typography>

        <Box m={2} />

        <Typography variant="h6">
          Feel free to play a bit with the points. You can:
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Move the points"
              secondary="(just desktop) Drag and drop the points withing the dark area."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Add new points"
              secondary="Click inside the dark area. NOTE: the new point will be inserted in the best curve segment, in this case the closest one. Using a helper function from the libraries named: Helpers.bestPlaceToInsertPoint();"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Remove points"
              secondary="Click inside one point."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Choose smooth"
              secondary="We can choose the smooth value used to generate the curve."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Choose if it is a close curve"
              secondary="We can check if we want an open or close curve (close has no start or end)"
            />
          </ListItem>
        </List>

        <Box m={2} />

        <Box>
          <svg
            ref={canvasRef}
            className={classes.canvas}
            onMouseUp={(e) => onMouseUp(e)}
            onMouseMove={(e) => onMouseMove(e)}
          >
            <path className={classes.path} d={path} />
            {points.map((p, i) => (
              <CanvasPoint
                key={i + p.getHashCode()}
                point={p}
                index={i}
                onDragStart={onPointDragStart}
                onPointMouseUp={onPointMouseUp}
              />
            ))}
          </svg>
        </Box>

        <Box m={2} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
          <TextField
            id="smoot"
            label="Smooth:"
            variant="outlined"
            type="number"
            inputProps={{
              min: "0",
              max: "2",
              step: "0.1"
            }}
            value={smooth}
            onChange={(e) => onSmoothChange(Number.parseFloat(e.target.value))}
          />

          <FormControlLabel control={<Checkbox defaultChecked checked={isClosed} onChange={(e) => onIsClosedChange(e.target.checked)} />} label="Is Close Curve" />

          <Button onClick={(e) => { onClear(); e.preventDefault(); }}>Clear</Button>
        </Box>
      </Container>
    </div>
  );
}

type PointProps = {
  point: Point;
  index: number;
  onDragStart: (i: number) => void;
  onPointMouseUp: (e: MouseEvent, i: number) => void;
};

function CanvasPoint({
  point,
  index,
  onDragStart,
  onPointMouseUp
}: PointProps) {
  const [isMouseIn, setIsMouseIn] = useState(false);
  return (
    <circle
      cx={point.x}
      cy={point.y}
      r={isMouseIn ? 5 : 3}
      stroke="black"
      strokeWidth="1"
      fill="red"
      onMouseMove={(e) => {
        if (e.buttons === 1) {
          onDragStart(index);
        }
      }}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
      onMouseUp={(e) => onPointMouseUp(e, index)}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  canvas: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "400px",
  },
  path: {
    fill: "none",
    stroke: theme.palette.info.main
  }
}))