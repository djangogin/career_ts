import React, { useState, useRef, useLayoutEffect } from "react";
import ReactDOMServer from "react-dom/server";
// @ts-ignore
import { OrgChart } from "d3-org-chart";
import CustomNodeContent from "./customNodeContent";
import CustomExpandButton from "./customExpandButton";
import EmployeeDetailsCard from "./employeeDetailsCard";

const OrganizationalChart = (props: any) => {
  const d3Container = useRef(null);
  const [cardShow, setCardShow] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  const handleShow = () => setCardShow(true);
  const handleClose = () => setCardShow(false);

  useLayoutEffect(() => {
    const toggleDetailsCard = (nodeId: React.SetStateAction<string>) => {
      handleShow();
      setEmployeeId(nodeId);
    };
    const chart = new OrgChart();
    if (props.data && d3Container.current) {
      chart
        .container(d3Container.current)
        .data(props.data)
        .nodeWidth((d:any) => 300)
        .nodeHeight((d:any) => 140)
          .compact(false)
          .siblingsMargin((d:any) => 500)
          .childrenMargin((d:any) => 100)
        .compactMarginBetween((d:any) => 80)
        .onNodeClick((d:any) => {
          toggleDetailsCard(d);
        })
        .buttonContent((node:any, state:any) => {
          return ReactDOMServer.renderToStaticMarkup(
            <CustomExpandButton {...node.node} />
          );
        })
        .nodeContent((d:any) => {
          return ReactDOMServer.renderToStaticMarkup(
            <CustomNodeContent {...d} />
          );
        })
      .initialZoom(0.5)
        .render();

    }
  }, [props, props.data]);

  return (
    <div className="org-chart" ref={d3Container}>
      {cardShow && (
        <EmployeeDetailsCard
          employees={props.data}
          employee={props.data.find((employee:any) => employee.id === employeeId)}
          handleClose={handleClose}
        />
      )}
      <div className="border py-2 px-4 rounded flex flex-col items-center mb-2" ref={d3Container}>
        <p>ТУК</p>
      </div>
    </div>

  );
};

export default OrganizationalChart;
