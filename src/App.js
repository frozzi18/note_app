import React, { useState, useEffect } from "react";
import "./App.scss";
import { useTransition, animated, config } from "react-spring";

import Container from "./components/container";
import Section from "./components/section";
import Square from "./components/square";
import Main from "./pages/main";
import Details from "./pages/details";
import notes from "./notes/notes";
import audioss from "./notes/audio";

const slides = [
  {
    id: 0,
    url:
      "photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i",
  },
  {
    id: 1,
    url:
      "photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80",
  },
  {
    id: 2,
    url: "reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80",
  },
  { id: 3, url: "photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80" },
];

function App() {
  const [noteId, setNoteId] = useState(0);
  const note = notes;
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 4000),
    []
  );

  let audios = audioss;
  // const props = useSpring({ opacity: 0, from: { opacity: 1 } });

  const handleClick = (e) => {
    setNoteId(e.target.value);
    playNotes(noteId);
  };

  const playNotes = (id) => {
    var playPromise = audios[id].play();
    console.log(audios[id]);

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Automatic playback started!
          // Show playing UI.
          console.log("audio played auto");
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
          console.log(error);
          console.log("playback prevented");
        });
    }
  };

  const renderDetails = () => {
    if (noteId >= 0) {
      return (
        <Section>
          <Container>
            <Details note={note} noteId={noteId} />
          </Container>
        </Section>
      );
    }
  };

  return (
    <div className="App">
      <Section>
        <Container>
          {transitions.map(({ item, props, key }) => (
            <animated.div
              key={key}
              className="bg"
              style={{
                ...props,
                backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
              }}
            />
          ))}
        </Container>
      </Section>
      <Section>
        <Container>
          <Main />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid">
            <Square eventClick={handleClick} squareId={0} />
            <Square eventClick={handleClick} squareId={1} />
            <Square eventClick={handleClick} squareId={2} />
            <Square eventClick={handleClick} squareId={3} />
            <Square eventClick={handleClick} squareId={4} />
            <Square eventClick={handleClick} squareId={5} />
            <Square eventClick={handleClick} squareId={6} />
            <Square eventClick={handleClick} squareId={7} />
            <Square eventClick={handleClick} squareId={8} />
            <Square eventClick={handleClick} squareId={9} />
            <Square eventClick={handleClick} squareId={10} />
            <Square eventClick={handleClick} squareId={11} />
            <Square eventClick={handleClick} squareId={12} />
          </div>
        </Container>
      </Section>
      {renderDetails()}
      {/* <Section>
        <Container>
          <animated.div style={props}>
            <h1>Helllo My friend</h1>
          </animated.div>
        </Container>
      </Section> */}
    </div>
  );
}

export default App;
