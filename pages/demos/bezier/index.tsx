import { useState, useRef, MouseEvent } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import AppBar from "components/Appbar";
import Head from 'next/head';
import { Point } from "rulyotano.math.geometry";
import { BezierInterpolation } from "rulyotano.math.interpolation.bezier";

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
    setPoints([...points, getPointFromMouseEventCoordinates(x, y)]);
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
        <h1>Demo interpolate with Bezier curves</h1>

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

        <p>Click in the background to add new point</p>
        <p>Click in one point to delete it</p>
        <p>Drag & Drop the points</p>
        <label htmlFor="smoot">Smooth:</label>
        <Input
          id="smoot"
          type="number"
          inputProps={{
            min: "0",
            max: "2",
            step: "0.1"
          }}
          value={smooth}
          onChange={(e) => onSmoothChange(Number.parseFloat(e.target.value))}
        />
        <br />
        <label>Is Close Curve:</label>{" "}
        <input
          type="checkbox"
          checked={isClosed}
          onChange={(e) => onIsClosedChange(e.target.checked)}
        />
        <br />
        <Button onClick={(e) => { onClear(); e.preventDefault(); }}>Clear</Button>
      </Container>
    </div>
  );
}

function CanvasPoint({
  point,
  index,
  onDragStart,
  onPointMouseUp
}: {
  point: Point;
  index: number;
  onDragStart: (i: number) => void;
  onPointMouseUp: (e: MouseEvent, i: number) => void;
}) {
  const classes = useStyles();
  return (
    <circle
      className={classes.point}
      cx={point.x}
      cy={point.y}
      r="3"
      stroke="black"
      strokeWidth="1"
      fill="red"
      onMouseMove={(e) => {
        if (e.buttons === 1) {
          onDragStart(index);
        }
      }}
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
  },
  point: {
    '&:hover': {
      strokeWidth: theme.spacing(0.3)
    }
  }
}))