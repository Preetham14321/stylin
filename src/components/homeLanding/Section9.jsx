import React, { useState, useEffect,useRef } from "react";

const Counter 

= ({ initialValue, finalValue,title }) => {
  const [count, setCount] = useState(initialValue);
  const digits = count.toString().split('').map(Number);

  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounting = () => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < finalValue ? prevCount + 1 : finalValue));
    }, 10); // Adjust the interval as needed

    return () => clearInterval(interval);
  };

 

  return (
    <div  ref={counterRef} 
      className="bg-white h-[480px]  flex items-center justify-around font-lexend
    "
    >
      <div className="number-counter font-lexend">
        <span className="lg:text-[100px] font-semibold">{count}+</span>
        <p className="text-[#202020] lg:text-xl font-mutka">
        {title}
        </p>
      </div>
      {/* <div className="number-counter">
        <span className="lg:text-[100px] font-semibold">{count2}</span>
        <p className="text-[#202020] lg:text-xl font-mutka ">
          Lorem ipsum dolor <br /> amet consectetur.
        </p>
      </div>
      <div className="number-counter">
        <span className="lg:text-[100px] font-semibold">{count3}</span>
        <p className="text-[#202020] lg:text-xl font-mutka ">
          Lorem ipsum dolor <br /> amet consectetur.
        </p>
      </div> */}
    </div>
  );
};

const Section9 = () => {
  return (
    <div className="flex justify-around items-center bg-white">
      <Counter title='partner businesses' initialValue={0} finalValue={100} />
      <Counter title='active users' initialValue={1200} finalValue={1500} />
      <Counter title='cities' initialValue={25} finalValue={75} />
    </div>
  );
};

export default Section9;


