import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Card, Container, Form, Button } from 'react-bootstrap';
import './AddFood.css';
import { useState } from 'react';
const AddFood = () => {



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
  const onSubmit = data => {
    const foodData = {
      name:data.name,
      imageURL: imageURL,
      recipe:data.recipe,
      ingredients:data.ingredients,
      type:data.type
      };
      const url = `http://localhost:5001/food`
    console.log(foodData)
    fetch(url, {
    method: 'POST',
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(foodData)
    })
    .then(res => alert('Food added'))
  }



  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData()
    imageData.set('key','490603be0b2b864cf04e99aa7ef5f737')
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
    imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      }); 
      event.preventDefault()



    }






    return (
        <div className="App">
         
            {/* <form class="col-md-6 m-auto py-5 d-flex" n id="submit">
                <input id="search" type="text" class="form-control" placeholder="Search here your food....">
                <button type="button" class="btn btn-info ">search</button>

            </form> */}
            <h1>Add food</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="Fullform form-control">
      <label htmlFor="name">Product Name</label>
      <input id="name" type="text" name="name" {...register('name', { required: true})} /> <br/>
      <label htmlFor="name">Product Ingredients</label>
      <input id="ingredients" name="ingredients" {...register('ingredients', { required: true})}className="form-control" type="text" />
      <label htmlFor="name">Recipe</label>
      <input id="recipe" name="recipe" className="form-control" type="text" {...register('recipe', { required: true })} /> <br/>
      <label htmlFor="name">Type</label>
      <input id="type" name="type" className="form-control" type="text" {...register('type', { required: true })} /> <br/>
      <label htmlFor="name">Add Photo</label>
      <input id="photo" className="form-control" type="file" name="exampleRequired" onChange={handleImageUpload} 
      // {...register('photo', { required: true, maxLength: 30 })} 
      />
      <input type="submit" className="form-control" type="submit" id="submit" />
    </form>



            {/* <h1>Add food</h1>
            <Card>
            <Form onSubmit={handleSubmit(onSubmit)} className="form-control" className="Fullform">
            <div>
            <Form.Label>Product Name</Form.Label>
            <Form.Control className="form-control " name="name" {...register('name', { required: true})} /> <br/>
            <Form.Label>Product Weight</Form.Label>
             <Form.Control className="form-control " type="number" name="weight" {...register('weight', { required: true})}/> 
            </div>
            <br/>
            <div>
            <Form.Label>Add Price</Form.Label>
            <Form.Control className="form-control " name="price" defaultValue="Price" type="number" {...register('price', { required: true})}  /> <br/>
             <Form.Label>Add Photo</Form.Label>
            <Form.Control className="form-control " onChange={handleImageUpload} name="exampleRequired" type="file"  />
            </div>
            <br/>
            <Form.Control className="form-control" type="submit" id="submit"/>
            </Form>
            </Card> */}

           



                

            </div>
    );
};

export default AddFood;