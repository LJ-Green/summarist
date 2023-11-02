import React, { useState } from "react";
import { PiBookBookmarkFill } from "react-icons/pi";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { BsCircle } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import Footer from "../components/Footer";

const ChoosePlan = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const questions = [
    "How does the free 7-day trial work?",
    "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
    "What's included in the Premium plan?",
    "Can I cancel during my trial or subscription?",
  ];

  const answers = [
    "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.",
    "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.",
    "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.",
    "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.",
  ];

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="choose-plan-container">
        <div className="choose-plan-landing">
          <p className="choose-plan-header">
            Get unlimited access to many amazing books to read
          </p>
          <p className="choose-plan-subheading">
            Turn ordinary moments into amazing learning opportunities
          </p>
          <img
            className="choose-plan-landing-img"
            src="https://summarist.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpricing-top.4d86e93a.png&w=1920&q=75"
            alt="plan image"
          />
        </div>
        <div className="choose-plan-features">
          <div className="plan-feature">
            <PiBookBookmarkFill className="plan-icons" size={60} />
            Key ideas in few min with many books to read
          </div>
          <div className="plan-feature">
            <PiPottedPlantFill className="plan-icons" size={60} />3 million
            people growing with Summarist everyday
          </div>
          <div className="plan-feature">
            <FaHandshakeSimple className="plan-icons" size={60} />
            Precise recommendations collections curated by experts
          </div>
        </div>
        <div className="plans-container">
          <p className="plans-header">Choose the plan that fits you</p>
          <div className="plan-card-container">
            <div className="plan-inner-icon">
              <BsCircle size={30} />
            </div>
            <div>
              <p className="plan-yearly-title">Premium Plus Yearly</p>
              <p className="plan-yearly-pricing">£88.88/year</p>
              <p className="plan-free-trial">7-day free trial included</p>
            </div>
          </div>
        </div>
        <p className="plan-card-divider">or</p>
        <div className="plan-card-container">
          <div className="plan-inner-icon">
            <BsCircle size={30} />
          </div>
          <div>
            <p className="plan-yearly-title">Premium Monthly</p>
            <p className="plan-yearly-pricing">£8.88/month</p>
            <p className="plan-free-trial">No trial included</p>
          </div>
        </div>
        <p className="plan-card-divider">
          Cancel your trial at any time before it ends, and you won’t be
          charged.
        </p>
        <div className="plan-questions-container">
          {questions.map((question, index) => (
            <div
              className="plan-questions"
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <p className="question">{question}</p>
              <BsChevronDown
                className={`answer-icon ${activeIndex === index ? "show" : ""}`}
              />
              {activeIndex === index && (
                <div
                  className={`answer ${activeIndex === index ? "show" : ""}`}
                >
                  <p className="question-answer">{answers[index]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChoosePlan;
