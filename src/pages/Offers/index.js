import React, { useState } from 'react';
import { Form, Input, Select, InputNumber, Button, message, DatePicker } from 'antd';
import './index.css';

const { Option } = Select;

const categoryOptions = ['Main Course', 'Pizza', 'Soups', 'Beverages', 'Sandwiches/Wraps', 'Starters', 'Specials', 'Salads', 'Deserts', 'North-Indian', 'Chinese', 'South-Indian'];
const restaurants = ['Cibo Matto', 'Hyderabadi Bucket Biryani', 'UP Wala', 'The Chat Deck', 'The Table Spoon',]
const fooditems = ['Butter Chicken', 'Chicken Burger', 'Prawns Biryani', 'Fried Rice', 'Sizzling Brownie']

const Offers = () => {
  const [form] = Form.useForm();
  const [offers, setOffers] = useState([]);
  const [currentPart, setCurrentPart] = useState(1);

  const nextPart = async () => {
    try {
      await form.validateFields();
      setCurrentPart(currentPart + 1);
    } catch (error) {
      console.log('Validation error:', error);
    }
  };

  const prevPart = () => {
    setCurrentPart(currentPart - 1);
  };

  const onFinish = (values) => {
    const { code } = values;
    if (offers.some((offer) => offer.code === code)) {
      message.error('Code must be unique');
      return;
    }

    const newOffer = { ...values };
    setOffers([...offers, newOffer]);
    form.resetFields();
    setCurrentPart(1);
  };

  const renderFormPart = () => {
    switch (currentPart) {
      case 1:
        return (
          <>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please enter the name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Code"
              name="code"
              rules={[
                { required: true, message: 'Please enter the code' },
                {
                  validator: (_, value) => {
                    if (!value || !offers.some((offer) => offer.code === value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Code must be unique'));
                  },
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please enter the description' }]}
            >
              <Input.TextArea />
            </Form.Item>
          </>
        );
      case 2:
        return (
          <>
            <Form.Item
              label="Value"
              name="value"
              rules={[{ required: true, message: 'Please enter the value' }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: 'Please select the type' }]}
            >
              <Select>
                <Option value="percentage">Percentage</Option>
                <Option value="fixed">Fixed</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Max Value"
              name="maxValue"
              rules={[{ required: true, message: 'Please enter the maximum value' }]}
            >
              <InputNumber />
            </Form.Item>
          </>
        );
      case 3:
        return (
          <>
            <Form.Item
              label="Valid From"
              name="validFrom"
              rules={[{ required: true, message: 'Please select the valid from date' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label="Valid To"
              name="validTo"
              rules={[{ required: true, message: 'Please select the valid to date' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label="Usage Limits"
              name="usageLimits"
              rules={[
                { required: true, message: 'Please enter the usage limits' },
              ]}
            >
              <Input.Group compact>
                <Form.Item
                  name={['usageLimits', 'maxUses']}
                  noStyle
                  rules={[{ required: true, message: 'Please enter the maximum uses' }]}
                >
                  <InputNumber placeholder="Max Uses" style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                  name={['usageLimits', 'usesPerUser']}
                  noStyle
                  rules={[{ required: true, message: 'Please enter the uses per user' }]}
                >
                  <InputNumber placeholder="Uses Per User" style={{ width: '50%' }} />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item
              label="Nth Order"
              name="NthOrder"
              rules={[
                { required: false, message: 'Please enter the order numbers' },
              ]}
            >
              <Input.Group compact>
                <Form.Item
                  name={['NthOrder', 'min']}
                  noStyle
                  rules={[{ required: true, message: 'Please enter the min order' }]}
                >
                  <InputNumber placeholder="Min order" style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item
                  name={['NthOrder', 'max']}
                  noStyle
                  rules={[{ required: true, message: 'Please enter the max order' }]}
                >
                  <InputNumber placeholder="max order" style={{ width: '50%' }} />
                </Form.Item>
              </Input.Group>
            </Form.Item>
          </>
        );
      case 4:
        return (
          <>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[{ required: true, message: 'Please enter the quantity' }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Applicable Restaurants"
              name="applicableRestaurants"
              rules={[
                { required: false, message: 'Please select at least one applicable Restaurant' },
              ]}
            >
              <Select mode="multiple" placeholder="Select restaurants">
                {restaurants.map((restaurant) => (
                  <Option key={restaurant} value={restaurant}>
                    {restaurant}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Applicable Categories"
              name="applicableCategories"
              rules={[
                { required: false, message: 'Please select at least one applicable category' },
              ]}
            >
              <Select mode="multiple" placeholder="Select categories">
                {categoryOptions.map((category) => (
                  <Option key={category} value={category}>
                    {category}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Applicable Food Items"
              name="applicableFoodItems"
              rules={[
                { required: false, message: 'Please select at least one applicable food item' },
              ]}
            >
              <Select mode="multiple" placeholder="Select food items">
                {fooditems.map((fooditem) => (
                  <Option key={fooditem} value={fooditem}>
                    {fooditem}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Min Order Amount"
              name="minOrderAmount"
              rules={[
                { required: false, message: 'Please enter the minimum order amount' },
              ]}
            >
              <InputNumber />
            </Form.Item>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1>Create New Offer</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        scrollToFirstError
        className="form"
      >
        {renderFormPart()}
        <div className="form-buttons">
          {currentPart > 1 && (
            <Button type="primary" onClick={prevPart}>
              Previous
            </Button>
          )}
          {currentPart < 4 && (
            <Button type="primary" onClick={nextPart}>
              Next
            </Button>
          )}
          {currentPart === 4 && (
            <Button type="primary" htmlType="submit">
              Add Offer
            </Button>
          )}
        </div>
      </Form>
      {offers.length > 0 && (
        <div className="added-offers">
          <h2>Added Offers:</h2>
          <ul>
            {offers.map((offer, index) => (
              <li key={index}>
                <h3>Name: {offer.name}</h3>
                <p>Code: {offer.code}</p>
                <p>Description: {offer.description}</p>
                <p>Value: {offer.value}</p>
                <p>Type: {offer.type}</p>
                <p>Max Value: {offer.maxValue}</p>
                <p>Valid From: {offer.validFrom.format('YYYY-MM-DD')}</p>
                <p>Valid To: {offer.validTo.format('YYYY-MM-DD')}</p>
                <p>Usage Limits - Max Uses: {offer.usageLimits.maxUses}</p>
                <p>Usage Limits - Uses Per User: {offer.usageLimits.usesPerUser}</p>
                {offer.NthOrder && (
                  <>
                    <p>Nth Order - Min: {offer.NthOrder.min}</p>
                    <p>Nth Order - Max: {offer.NthOrder.max}</p>
                  </>
                )}
                <p>Quantity: {offer.quantity}</p>
                <p>Applicable Restaurants: {offer.applicableRestaurants.join(', ')}</p>
                <p>Applicable Categories: {offer.applicableCategories.join(', ')}</p>
                <p>Applicable Food Items: {offer.applicableFoodItems.join(', ')}</p>
                {offer.minOrderAmount && (
                  <p>Min Order Amount: {offer.minOrderAmount}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Offers;
