import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input/Input";
import Button from "../atoms/Button/Button";
import useHttp from "../../hooks/useHttp";
import { useAuth } from "../../context/AuthContext";
import { useInput } from "../../hooks/useInput";
import {
  hasInputValuesValidValue,
  hasPriceInputValidValue,
} from "../../utils/validation";
import TextArea from "../atoms/TextArea";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdPriceCheck } from "react-icons/md";
import InfoText from "../atoms/InfoText";
import { IoMdAttach } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
`;

const FormContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* max-width: 600px;
  margin: 60px auto; */
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
  border: 1px solid #eee;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-size: 21px;
  margin-bottom: 20px;
  display: flex;
  font-weight: 500;
`;

const StyledSection = styled.section`
  margin-bottom: 7px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 7px;
`;

export default function EventForm() {
  const {
    values: eventData,
    handleInputChange,
    handleInputBlur,
    errors: hasError,
  } = useInput(
    {
      title: "",
      category: "",
      price: "",
      description: "",
      imageUrl: "",
      location: "",
      date: "",
      month: "",
    },
    (events) => {
      // comvert the price to nuber before validating
      const price = parseFloat(events.price);

      const allFieldsAreValid = hasInputValuesValidValue(
        events.title,
        events.category,
        events.description,
        events.imageUrl,
        events.location,
        events.date,
        events.month
      );

      return {
        title: events.title.trim() !== "",
        category: events.category.trim() !== "",
        description: events.description.trim() !== "",
        imageUrl: events.imageUrl.trim() !== "",
        location: events.location.trim() !== "",
        date: events.date.trim() !== "",
        month: events.month.trim() !== "",
        price: !isNaN(price) && hasPriceInputValidValue(price),
        allValid:
          allFieldsAreValid && !isNaN(price) && hasPriceInputValidValue(price),
      };
    }
  );

  const { isAuthenticated } = useAuth();

  const [{ isLoading, error }, fetchData] = useHttp(
    "http://localhost:8080/api/createEvent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event Data: ", eventData);

    if (!isAuthenticated) {
      console.error(
        "No token is found, user has to be logged in to create an event"
      );
      return;
    }

    fetchData({
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // this will set the HtttpOnly cookie - important
    });
  };

  return (
    <>
      <Wrapper>
        <SectionTitle>Try creating a new event: </SectionTitle>
        <FormContainer>
          <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            <form onSubmit={handleSubmit}>
              <LabelContainer>
                <Label htmlFor="title">
                  <Paragraph>Create an event: </Paragraph>
                </Label>
              </LabelContainer>
              <StyledSection>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter the name of the event"
                  value={eventData.title}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  error={
                    hasError.title ? "Please enter a valid title name" : ""
                  }
                  icon={<MdDriveFileRenameOutline />}
                />
              </StyledSection>
              <StyledSection>
                <LabelContainer>
                  <Label htmlFor="category">
                    <Paragraph>Category:</Paragraph>
                  </Label>
                </LabelContainer>
                <Input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Enter the name of the category"
                  value={eventData.category}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  error={
                    hasError.category ? "Please enter a valid category" : ""
                  }
                  icon={<BiCategory />}
                />
              </StyledSection>
              <StyledSection>
                <LabelContainer>
                  <Label htmlFor="price">
                    <Paragraph>Price:</Paragraph>
                  </Label>
                </LabelContainer>
                <Input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Price in number"
                  value={eventData.price}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  error={hasError.price ? "Enter the price in number" : ""}
                  icon={<MdPriceCheck />}
                />
              </StyledSection>
              <StyledSection>
                <LabelContainer>
                  <Label htmlFor="description">
                    <Paragraph>Description:</Paragraph>
                  </Label>
                </LabelContainer>
                <InfoText size="info" text="description">
                  Maximum description words is around 200 words, please be aware
                  of it.
                </InfoText>
                <TextArea
                  id="description"
                  name="description"
                  value={eventData.description}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  error={
                    hasError.description
                      ? "Write  a short description of the event ( max word limit: 100 )"
                      : ""
                  }
                  placeholder={""}
                />
              </StyledSection>
              <StyledSection>
                <LabelContainer>
                  <Label htmlFor="imageUrl">
                    <Paragraph>Image Url:</Paragraph>
                  </Label>
                </LabelContainer>
                <Input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Attach the img url only"
                  value={eventData.imageUrl}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  error={
                    hasError.imageUrl
                      ? "Please provide us the valid image url"
                      : ""
                  }
                  icon={<IoMdAttach />}
                />
              </StyledSection>
              <StyledSection>
                <LabelContainer>
                  <Label htmlFor="location">
                    <Paragraph>Location:</Paragraph>
                  </Label>
                </LabelContainer>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter the location details"
                  value={eventData.location}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  error={
                    hasError.location
                      ? "Enter your location: Example: London, England "
                      : ""
                  }
                  icon={<FaLocationDot />}
                />
              </StyledSection>
              <StyledSection>
                <LabelContainer>
                  <Label htmlFor="date">
                    <Paragraph>Date:</Paragraph>
                  </Label>
                </LabelContainer>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  // error={hasError.date ? "Select a valid date" : ""}
                />
              </StyledSection>
              <StyledSection>
                <LabelContainer>
                  <Label htmlFor="month">
                    <Paragraph>Month:</Paragraph>
                  </Label>
                </LabelContainer>
                <Input
                  type="text"
                  id="month"
                  name="month"
                  placeholder="Enter the month only"
                  value={eventData.month}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  error={
                    hasError.month
                      ? "Please enter the month: Example : July"
                      : ""
                  }
                  icon={<MdOutlineCalendarMonth />}
                />
              </StyledSection>
              <InfoText size="text" text="tickets">
                Note that once the event has created, ticket(s) can be added or
                modified based on the user request !
              </InfoText>

              <ButtonContainer>
                <Button type="reset" text="Reset" variant="secondary">
                  Reset
                </Button>
                <Button type="submit" text="Next" variant="primary">
                  Next
                </Button>
              </ButtonContainer>
            </form>
          </div>
        </FormContainer>
      </Wrapper>
    </>
  );
}
