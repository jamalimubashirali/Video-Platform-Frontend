import React from 'react';
import { Button, InputField } from './index';
import {useForm } from 'react-hook-form';
import commentService from '../services/comment.service';

const CommentInput = () => {
  const { register, handleSubmit , reset , formState : {errors} } = useForm();
  const addComment = async (data) => {
    try {
      const response = await commentService.addComment(data.comment);
      reset();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit(addComment)} className='gap-2 p-4'>
        <InputField
        className="mr-2"
        placeholder="Add a comment"
        {...register('comment' , {required: "Comment can not be empty"})}
      />
      {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
      <Button className="bg-blue-500 text-white" type="subimt">
        Add Comment
      </Button>
    </form>
  );
};

export default CommentInput;
