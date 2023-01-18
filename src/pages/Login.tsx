import { LayoutSettings } from "../components/Layout";
import { InputForm } from "../components/Input";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import { Form, Toggle } from "react-daisyui";

function Login() {
  return (
    <LayoutSettings>
      <h1 className="text-center text-3xl p-5">Login</h1>
      <div className="mt-4">
        <h1>Username/Email</h1>
        <InputForm placeholder="Username/Email" />
      </div>
      <div className="mt-4">
        <h1>Passsword</h1>
        <InputForm placeholder="Passsword" type={"password"} />
      </div>
      <Form className="mt-4">
        <Form.Label title="Remember me">
          <Toggle className="m-2" />
        </Form.Label>
      </Form>
      <ButtonPrimary label="Login" />
      <div className="mt-4 text-center">
        <p>Or</p>
      </div>
      <ButtonSecondary label="Sign Up" />
    </LayoutSettings>
  );
}

export default Login;
