import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import videoService from '../services/video.service';
import {Button , InputField} from "./index";

const VideoUpload = () => {
  const {register, handleSubmit , formState : {errors}} = useForm();

  const onSubmit = async (data) => {
    await videoService.publishVideo(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <div>
          <InputField 
          type="file"
          {...register("videoFile") , {required : "Video File is required"}}
          ref={useRef()}
          />
        </div>
        {errors.videoFile && <p>{errors.videoFile.message}</p>}
        </div>
        <div>
        <InputField 
        label={`Title`}
        placeholder = {`Enter Video Title`}
        {...register("title") , {required : "This field is required"}}
        ref={useRef()}
        />
        {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <InputField 
          label={`Description`}
          placeholder = {`Enter Video Description`}
          {...register("description") , {required : "This field is required"}}
          ref={useRef()}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div>
          <InputField 
          type="file"
          {...register("thumbnail") , {required : "Thumbnail is required"}}
          ref={useRef()}
          />
          {errors.thumbnail && <p>{errors.thumbnail.message}</p>}
        </div>
        <Button type="submit">Upload Video</Button>
      </form>
    </div>
  )
}

export default VideoUpload;
