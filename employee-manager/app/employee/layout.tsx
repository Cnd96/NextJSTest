"use client";
import { Provider } from "react-redux";
import NavBar from "../components/molecules/navBar";
import { store } from "../store";

const EmployeeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <NavBar title="Employee Manager" />
      <div>{children}</div>
    </Provider>
  );
};

export default EmployeeLayout;
