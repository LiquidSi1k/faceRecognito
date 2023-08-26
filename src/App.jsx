import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState, useEffect } from "react";

function App() {
  const [userInput, setNewInput] = useState("");
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

  const onInputChange = (e) => {
    e.preventDefault();
    setNewInput(e.target.value);
    console.log(e.target.value);
  };

  const onButtonSubmit = () => {
    console.log("clicked");
  };

  useEffect(() => {
    if (userInput) {
      fetch(
        "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
        returnClarifaiReqOpt(userInput)
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  }, [userInput]);

  return (
    <>
      <div className="App">
        <ParticlesBg type="lines" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    </>
  );
}

export default App;
