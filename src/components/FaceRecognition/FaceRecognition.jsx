import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="relative">
      FaceRecognition
      <img
        className="rounded-lg shadow-2xl shadow-blue m-auto"
        src={imageUrl}
        alt="input image"
        id="image"
      />
      <div
        className="bounding-box"
        style={{
          top: box.toprow,
          right: box.rightcol,
          bottom: box.bottomrow,
          left: box.leftcol,
        }}
      ></div>
    </div>
  );
};

export default FaceRecognition;
