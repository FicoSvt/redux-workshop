import React, { Component } from "react";
import AnimatedWrapper from "../../../components/AnimatedWrapper/AnimatedWrapper";

class Error404 extends Component {
    render() {
        return (
            <main>
      <p>Oooops, something went wrong !</p>
    </main>
            
          );
    }
};

const Error404Component = AnimatedWrapper(Error404);
export default Error404Component;