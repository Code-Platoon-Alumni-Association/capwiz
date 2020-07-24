import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CapwizTheVirtual from './CapwizTheVirtual';
import styled from 'styled-components';


type Project = {
  id: number;
  title: string;
  desciption: string;
  stories: Story[];
  Team: Team;
  room: Room;
  stage: ProjectStage;
}

type Team = Member[];

type Member = {
  name: string;
};

type Room = {
  id: number;
  occupants: Member[];
}

enum ProjectStage {
  New = 1,
  Planning,
  Building,
  Complete,
};


type Story = {
  lines: string[];
  assigned_to: Member;
}

const Wrapper = styled.div`
  max-height: 88vh;
  max-width: 88vw;
  margin: auto;
`;

const Header = styled.div`
  font-size: calc(10px + 2vmin);
`;

const MainButton = styled.button`
  border: 2px black solid;
  font-size: calc(1px + 2vmin);
  padding: 1vmin;
  margin: 1vmin;
  width: 45%;
  background: transparent;
  color: black;
`;

const Routing = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/new-room"><MainButton>New Room</MainButton></Link>
          </li>
          <li>
            <Link to="/join-room"><MainButton>Join Room</MainButton></Link>
          </li>
          <li>
            <Link to="/">Main Menu</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/new-room">
          <CapwizTheVirtual />
        </Route>
        <Route path="/join-room">
          <CapwizTheVirtual />
          <div>JOIN</div>
        </Route>
        <Route path="/">
          <MainMenu />
        </Route>
      </Switch>
    </div>
  </Router>
);

const MainMenu = () => (
  <>
    <CapwizTheVirtual /><br />
    <Header>Ready to make some magic?</Header>
  </>
);

function App() {
  return (<>
    <Wrapper>
    <Routing />
    </Wrapper>
    </>
  )
}

export default App;
