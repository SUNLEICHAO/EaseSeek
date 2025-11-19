import { useState } from "react";

import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface (参考 CSV 字段，去掉 geometry 以便展示)
interface IRow {
  link_id: number;
  name: string;
  from_node_id: number;
  to_node_id: number;
  dir_flag: number;
  length: number;
  lanes: number;
  capacity: number;
  free_speed: number;
  link_type: number;
  lclass: number;
  vdf: number;
  modes: string;
  no_stop: number;
  level: number;
  avail: number;
  toll: number;
  geometry: string;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min: number, max: number, digits = 3): number {
  const val = Math.random() * (max - min) + min;
  return parseFloat(val.toFixed(digits));
}

function sample<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomRows(count: number): IRow[] {
  const modeOptions = ["b;a;h;l;t", "a;h;t", "h;t", "a;h", "b;h;t", "a;b;h"];
  const linkTypes = [101, 102, 103, 104];
  const freeSpeeds = [30, 40, 50, 60, 80, 100, 120];
  const rows: IRow[] = [];
  for (let i = 1; i <= count; i++) {
    const fromNode = randomInt(10000, 99999);
    let toNode = randomInt(10000, 99999);
    if (toNode === fromNode) {
      toNode = fromNode + 1;
    }
    const lanes = randomInt(1, 6);
    const capacityPerLane = 1800;
    const capacity = lanes * capacityPerLane + randomInt(-200, 400);
    rows.push({
      link_id: i,
      name: `L-${10000 + i}`,
      from_node_id: fromNode,
      to_node_id: toNode,
      dir_flag: sample([0, 1]),
      length: randomFloat(0.5, 15, 3),
      lanes,
      capacity,
      free_speed: sample(freeSpeeds),
      link_type: sample(linkTypes),
      lclass: randomInt(1, 5),
      vdf: 1,
      modes: sample(modeOptions),
      no_stop: sample([0, 1]),
      level: randomInt(0, 3),
      avail: sample([0, 1]),
      toll: randomFloat(0, 10, 4),
      geometry: `LINESTRING(${randomFloat(114.31, 114.32, 6)} ${randomFloat(30.57, 30.58, 6)},${randomFloat(114.31, 114.32, 6)} ${randomFloat(30.57, 30.58, 6)},${randomFloat(114.31, 114.32, 6)} ${randomFloat(30.57, 30.58, 6)},${randomFloat(114.31, 114.32, 6)} ${randomFloat(30.57, 30.58, 6)})`,
    });
  }
  return rows;
}

// Create new GridExample component
export default function EditableTable() {
  function computeColWidthByField(fieldName: keyof IRow): number {
    const charWidth = 12;
    const padding = 48;
    return Math.round(padding + String(fieldName).length * charWidth);
  }
  // 可调行数
  const ROW_COUNT = 3000;
  // Row Data: 随机生成数据
  const [rowData] = useState<IRow[]>(() => generateRandomRows(ROW_COUNT));

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState<ColDef<IRow>[]>([
    {
      field: "link_id",
      headerName: "link_id",
      editable: false,
      width: computeColWidthByField("link_id"),
      headerTooltip: "link_id",
    },
    { field: "name", headerName: "name", editable: true, width: computeColWidthByField("name"), headerTooltip: "name" },
    {
      field: "from_node_id",
      headerName: "from_node_id",
      editable: true,
      width: computeColWidthByField("from_node_id"),
      headerTooltip: "from_node_id",
    },
    {
      field: "to_node_id",
      headerName: "to_node_id",
      editable: true,
      width: computeColWidthByField("to_node_id"),
      headerTooltip: "to_node_id",
    },
    {
      field: "dir_flag",
      headerName: "dir_flag",
      editable: true,
      width: computeColWidthByField("dir_flag"),
      headerTooltip: "dir_flag",
    },
    {
      field: "length",
      headerName: "length",
      editable: true,
      width: computeColWidthByField("length"),
      headerTooltip: "length",
    },
    {
      field: "lanes",
      headerName: "lanes",
      editable: true,
      width: computeColWidthByField("lanes"),
      headerTooltip: "lanes",
    },
    {
      field: "capacity",
      headerName: "capacity",
      editable: true,
      width: computeColWidthByField("capacity"),
      headerTooltip: "capacity",
    },
    {
      field: "free_speed",
      headerName: "free_speed",
      editable: true,
      width: computeColWidthByField("free_speed"),
      headerTooltip: "free_speed",
    },
    {
      field: "link_type",
      headerName: "link_type",
      editable: true,
      width: computeColWidthByField("link_type"),
      headerTooltip: "link_type",
    },
    {
      field: "lclass",
      headerName: "lclass",
      editable: true,
      width: computeColWidthByField("lclass"),
      headerTooltip: "lclass",
    },
    { field: "vdf", headerName: "vdf", editable: true, width: computeColWidthByField("vdf"), headerTooltip: "vdf" },
    {
      field: "modes",
      headerName: "modes",
      editable: true,
      width: computeColWidthByField("modes"),
      headerTooltip: "modes",
    },
    {
      field: "no_stop",
      headerName: "no_stop",
      editable: true,
      width: computeColWidthByField("no_stop"),
      headerTooltip: "no_stop",
    },
    {
      field: "level",
      headerName: "level",
      editable: true,
      width: computeColWidthByField("level"),
      headerTooltip: "level",
    },
    {
      field: "avail",
      headerName: "avail",
      editable: true,
      width: computeColWidthByField("avail"),
      headerTooltip: "avail",
    },
    { field: "toll", headerName: "toll", editable: true, width: computeColWidthByField("toll"), headerTooltip: "toll" },
    {
      field: "geometry",
      headerName: "geometry",
      editable: true,
      width: 200,
      headerTooltip: "geometry",
    },
  ]);

  const defaultColDef: ColDef = {
    sortable: false,
    // filter: true,
    resizable: false,
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ width: "100%", height: "500px" }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} />
      </div>
    </div>
  );
}
