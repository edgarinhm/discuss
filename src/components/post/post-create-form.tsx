"use client";

import FormButton from "@/components/common/form-button";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import { createPost } from "@/actions";

export default function PostCreateForm() {
  const [formState, action] = useFormState(createPost, { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">{"Create a Post"}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">{"Create a Post"}</h3>
            <Input
              name="title"
              label={"Title"}
              labelPlacement="outside"
              placeholder={"Title"}
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label={"Content"}
              labelPlacement="outside"
              placeholder={"Content"}
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            <FormButton>{"Create Post"}</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
