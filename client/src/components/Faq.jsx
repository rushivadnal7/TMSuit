import React from "react";
import styled from "styled-components";

const FaqContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  font-family: Arial, sans-serif;
  color: #2d3748;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Question = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  color: #0d1b2a;
`;

const Answer = styled.p`
  font-size: 16px;
  color: #718096;
  margin-left: 20px;
  line-height: 1.5;
`;

const List = styled.ul`
  margin-left: 40px;
  color: #718096;
`;

const ListItem = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Faq = ({ faqs }) => {
    return (
        <FaqContainer>
            <Title>FAQ</Title>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <Question>
                        {index + 1}. {faq.question}
                    </Question>
                    {Array.isArray(faq.answer) ? (
                        <List>
                            {faq.answer.map((item, idx) => (
                                <ListItem key={idx}>{item}</ListItem>
                            ))}
                        </List>
                    ) : (
                        <Answer>A: {faq.answer}</Answer>
                    )}
                </div>
            ))}
        </FaqContainer>
    );
};

export default Faq;
