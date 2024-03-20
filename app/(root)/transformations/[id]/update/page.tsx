import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";

const Page = async ({ params: { id } }: SearchParamProps) => {
  return <>Update</>;
};

export default Page;
