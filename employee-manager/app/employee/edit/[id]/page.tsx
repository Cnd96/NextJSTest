"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputWithLabel from "@/app/components/molecules/inputWithLabel";
import DropDownWithLabel from "@/app/components/molecules/dropDownWithLabel";
import { RootState } from "@/app/store";
import { EmployeePayload } from "@/app/types/employee";
import { FEMALE, MALE, GENDERS } from "@/app/helpers/constants";
import { employeeSchema } from "@/app/helpers/yupSchema";
import updateEmployee from "@/app/helpers/updateEmployee";

interface Props {
  params: { id: number };
}

const EmployeeEditPage = ({ params: { id } }: Props) => {
  const router = useRouter();
  const employee = useSelector((state: RootState) =>
    state.employee.employeeList.find((e) => e.id == id)
  );
  const smallScreen = useMediaQuery("(max-width:500px)");
  const mediumScreen = useMediaQuery("(max-width:700px)");

  const methods = useForm<EmployeePayload>({
    resolver: yupResolver(employeeSchema),
    defaultValues: {
      first_name: employee?.first_name,
      last_name: employee?.last_name,
      email: employee?.email,
      phone: employee?.phone,
      gender: employee?.gender === "M" ? MALE : FEMALE,
    },
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: EmployeePayload) => {
    const res = await updateEmployee({
      ...data,
      photo: employee?.photo,
      id: employee?.id,
    });
    if (res.isSuccess) {
      router.push("/employee/list");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          minHeight: "250px",
          width: smallScreen ? "90%" : mediumScreen ? "75%" : "50%",
          margin: "50px 0",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputWithLabel
                title="First Name"
                name="first_name"
                error={errors.first_name?.message}
              />
              <InputWithLabel
                title="Last Name"
                name="last_name"
                error={errors.last_name?.message}
              />
              <InputWithLabel
                title="Email"
                name="email"
                error={errors.email?.message}
              />
              <InputWithLabel
                title="Phone"
                name="phone"
                error={errors.phone?.message}
              />
              <DropDownWithLabel
                title="Gender"
                options={GENDERS}
                name="gender"
              />
              <Button
                type="submit"
                variant="outlined"
                data-testid="submit"
                color="primary"
                sx={{
                  width: "120px",
                  margin: "10px 0",
                  height: "30px",
                  color: "rgb(97, 18, 171)",
                  borderColor: "rgb(97, 18, 171)",
                  float: "right",
                }}
              >
                SAVE
              </Button>
            </form>
          </FormProvider>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default EmployeeEditPage;
