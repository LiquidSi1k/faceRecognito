import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import ParticlesBg from "particles-bg";
import { useState } from "react";

function App() {
  const [userInput, setNewInput] = useState("");
  const [box, setBox] = useState("");
  const [route, setRoute] = useState("SignIn");
  const [isSignedIn, setIsSignedIn] = useState();
  const MODEL_ID = "face-detection";

  const returnClarifaiReqOpt = (imageUrl) => {
    const PAT = "a2cdea03e55d422a8e1f27f99d40641f";
    const USER_ID = "kal_serio";
    const APP_ID = "FaceRecognito";
    const IMAGE_URL = imageUrl;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    return requestOptions;
  };

  const calculateFaceLocation = (data) => {
    const faceLocation =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);
    const rightCol = faceLocation.right_col * width;
    const bottomRow = faceLocation.bottom_row * height;
    return {
      leftcol: faceLocation.left_col * width,
      rightcol: width - rightCol,
      toprow: faceLocation.top_row * height,
      bottomrow: height - bottomRow,
    };
  };

  const faceBox = (box) => {
    setBox(box);
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setNewInput(e.target.value);
  };

  const onButtonSubmit = () => {
    fetch(
      "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
      returnClarifaiReqOpt(userInput)
    )
      .then((response) => response.json())
      .then((result) => faceBox(calculateFaceLocation(result)))
      .catch((error) => console.log("error", error));
  };

  const onRouteChange = (route) => {
    if (route === "signout") {
      setIsSignedIn(false);
    } else if (route === "home") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <>
      <div className="app">
        <ParticlesBg type="lines" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={userInput} />
          </div>
        ) : route === "SignIn" ? (
          <SignIn onRouteChange={onRouteChange} />
        ) : (
          <Register onRouteChange={onRouteChange} />
        )}
      </div>
    </>
  );
}

export default App;
