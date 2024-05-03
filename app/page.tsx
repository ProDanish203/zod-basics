"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm, SetFieldValue } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formSchema } from "@/validations/formSchema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Home = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    data: z.infer<typeof formSchema>
  ) => {
    console.log(data);
  };

  const handleCountryChange = (value: string) => {
    setValue("country", value, { shouldValidate: true });
  };

  return (
    <Card className="mx-auto max-w-sm w-full py-5">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="johndoe"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-[12px] text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="country">Country</Label>
            <Select onValueChange={handleCountryChange}>
              <SelectTrigger id="country" className="w-full">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pakistan">Pakistan</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="Dubai">Dubai</SelectItem>
              </SelectContent>
            </Select>
            {errors.country && (
              <span className="text-[12px] text-red-500">
                {errors.country.message}
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <p>Gender</p>
            <div className="flex gap-2">
              <input
                type="radio"
                id="male"
                value="male"
                {...register("gender")}
              />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="female"
                value="female"
                {...register("gender")}
              />
              <Label htmlFor="female">Female</Label>
            </div>
            {errors.gender && (
              <span className="text-[12px] text-red-500">
                {errors.gender.message}
              </span>
            )}
          </div>

          <Button disabled={isSubmitting} type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Home;
