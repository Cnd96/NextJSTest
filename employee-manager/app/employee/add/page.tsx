"use client";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputWithLabel from "@/app/components/molecules/inputWithLabel";
import DropDownWithLabel from "@/app/components/molecules/dropDownWithLabel";
import { MALE, GENDERS } from "@/app/helpers/constants";
import createEmployee from "@/app/helpers/createEmployee";
import { EmployeePayload } from "@/app/types/employee";
import { employeeSchema } from "@/app/helpers/yupSchema";

export default function EmployeeAddPage() {
  const router = useRouter();
  const smallScreen = useMediaQuery("(max-width:500px)");
  const mediumScreen = useMediaQuery("(max-width:700px)");

  const methods = useForm<EmployeePayload>({
    resolver: yupResolver(employeeSchema),
    defaultValues: {
      first_name: "chamal",
      last_name: "demele",
      email: "cham@ga.am",
      phone: "+94776917353",
      gender: MALE,
    },
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: EmployeePayload) => {
    const res = await createEmployee(data);
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
                ADD
              </Button>
            </form>
          </FormProvider>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
