import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  UpCircleOutlined,
  DownCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useLocalStorage } from "store/localStorage";

const { Sider } = Layout;

const SiderView = () => {
  let [counter, setCounter] = useLocalStorage("counter", []);
  let [counterName, setCounterName] = useState("");

  // useEffect(() => {
  //   setCounter([]);
  // }, []);

  const countHandler = (count, type) => {
    setCounter((prevCount) =>
      prevCount.map((x) => {
        if (x.id === count.id) {
          if (type === "add") {
            return {
              ...x,
              count: x.count + 1,
            };
          } else if (type === "minus") {
            return {
              ...x,
              count: x.count - 1,
            };
          }
        }
        return x;
      })
    );
  };

  const addCounter = (counterName) => {
    setCounterName("");
    setCounter((prevCount) => [
      ...prevCount,
      {
        id: counter.length + 1,
        name: counterName,
        count: 0,
      },
    ]);
  };

  const deleteCounter = (counterId) => {};

  console.log(counter, "counter");

  return (
    <div>
      <Sider width={200} className="site-layout-background">
        {/* <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        > */}

        {counter.map((index, key) => {
          return (
            <div>
              <span style={{ color: "#fff" }} key={key}>
                {index.name}: {index.count}
              </span>
              <UpCircleOutlined
                style={{ color: "#fff" }}
                onClick={() => countHandler(index, "add")}
              />
              <DownCircleOutlined
                style={{ color: "#fff" }}
                onClick={() => countHandler(index, "minus")}
              />
            </div>
          );
        })}
        <input
          value={counterName}
          onChange={(e) => setCounterName(e.target.value)}
        />
        <PlusCircleOutlined
          onClick={() => addCounter(counterName)}
          style={{ color: "#fff" }}
        />
      </Sider>
    </div>
  );
};

export default SiderView;
