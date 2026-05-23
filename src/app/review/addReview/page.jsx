
import { addReview } from "@/lib/action";
import {CirclePlus, Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField,Form} from "@heroui/react";
import {ListBox, Select} from "@heroui/react";

const AddReview = () => {
    return (
       
    
    // foodItem: "Chicken Burger"
       
            
            <div className="max-w-3xl mx-auto my-10 p-6 border rounded-xl shadow-sm bg-white">
  <Form action={addReview} className="flex flex-col gap-5">

    {/* Name */}
    <TextField name="name" className="w-full">
      <Label className="text-sm font-medium">Name</Label>
      <Input
        placeholder="Enter your name"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </TextField>

    {/* Comment */}
    <TextField name="comment" className="w-full">
      <Label className="text-sm font-medium">Comment</Label>
      <Input
        placeholder="Write your comment"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </TextField>

    {/* Rating + Food row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Rating */}
        <Select className="w-[256px]" placeholder="Rating" name="rating">
      <Label>Rating</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="3" textValue="3">
            3
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="4" textValue="4">
          4
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="5" textValue="5">
            5
            <ListBox.ItemIndicator />
          </ListBox.Item>
         
        </ListBox>
      </Select.Popover>
    </Select>

      {/* Fast Food */}
       <Select className="w-[256px]" placeholder="Food-Item" name="foodItem">
      
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="pizza" textValue="pizza">
            pizza
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="burger" textValue="burger">
          burger
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="beef biryani" textValue="beef biryani">
            beef biryani
            <ListBox.ItemIndicator />
          </ListBox.Item>
         
        </ListBox>
      </Select.Popover>
    </Select>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-3 pt-2">
      <Button slot="close" variant="secondary" className="px-4 py-2">
        Cancel
      </Button>
      <Button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Add Review
      </Button>
    </div>

  </Form>
</div>
        
    );
};

export default AddReview;