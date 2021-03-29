import React from "react";
import styled from "styled-components";
import COLORS from "../../themes/colors";
import { Input, Button as AntdButton } from "antd";

const Wrapper = styled.div`
  background: ${COLORS.white};
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  padding: 1rem;
  height: 250px;
  display: flex;
  max-width: 600px;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

const InputField = styled(Input)`
  width: 80%;
  margin: 10px 0px;
`;

const Button = styled(AntdButton)`
  width: 30%;
  padding: 5px;
  margin-top: 30px;
  font-weight: 600;
  border-radius: 8px;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
`;

const Signup = () => {
  return (
    <Wrapper>
      <Form>
        <h1>Sign Up Here</h1>
        <InputField
          placeholder="Full Name"
          onChange={(e) => console.log(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Email"
          onChange={(e) => console.log(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          onChange={(e) => console.log(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => console.log(e.target.value)}
        />
        <Button type="primary" onClick={() => {}}>
          Sign Up
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Signup;
