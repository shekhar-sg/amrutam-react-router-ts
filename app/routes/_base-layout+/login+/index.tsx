import LoginBox from "~/components/templates/commom/login-box";

const Login = () => {
  return (
    <LoginBox
      bd={"1px solid gray.6"}
      my={"min(20%, 200px)"}
      miw={360}
      maw={520}
      style={{
        borderRadius: 24,
      }}
    />
  );
};

export default Login;
