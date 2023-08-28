import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="flex justify-center">
      <div className="absolute">
        {imageUrl ? (
          <>
            <img
              className="rounded-lg shadow-2xl shadow-blue w-96"
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
          </>
        ) : (
          <p>Please paste an image url</p>
        )}
      </div>
    </div>
  );
};

export default FaceRecognition;
