import React from "react";
import { client } from "@/lib/apollo-client";
import { DocumentNode } from "graphql";

type FieldProps = {
  name: string;
  type: string;
  value: any;
};

type DynamicFormProps = {
  query: DocumentNode;
  variables?: Record<string, any>;
};

const renderField = (field: FieldProps) => {
  switch (field.type) {
    case "String":
      return (
        <div key={field.name}>
          <label>{field.name}</label>
          <input type="text" name={field.name} defaultValue={field.value} />
        </div>
      );
    case "Int":
    case "Float":
      return (
        <div key={field.name}>
          <label>{field.name}</label>
          <input type="number" name={field.name} defaultValue={field.value} />
        </div>
      );
    case "DateTime":
      return (
        <div key={field.name}>
          <label>{field.name}</label>
          <input
            type="date"
            name={field.name}
            defaultValue={new Date(field.value).toISOString().split("T")[0]}
          />
        </div>
      );
    case "Boolean":
      return (
        <div key={field.name}>
          <label>{field.name}</label>
          <input
            type="checkbox"
            name={field.name}
            defaultChecked={Boolean(field.value)}
          />
        </div>
      );
    default:
      return null; // Skip unsupported types
  }
};

export default async function DynamicForm({
  query,
  variables,
}: DynamicFormProps) {
  const { data } = await client.query({ query, variables });

  if (!data) return <p>No data available</p>;

  // Extract fields from data (assuming a single root object)
  const rootKey = Object.keys(data)[0];
  const fields = Object.entries(data[rootKey]).map(([key, value]) => {
    let type;

    if (typeof value === "number") {
      type = "Int";
    } else if (typeof value === "boolean") {
      type = "Boolean";
    } else if (typeof value === "string") {
      // Regex to check for date format (ISO 8601, e.g., "2023-12-31T23:59:59Z")
      const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
      type = dateRegex.test(value) ? "DateTime" : "String";
    } else {
      type = "String"; // Default fallback
    }

    return {
      name: key,
      type,
      value,
    };
  });

  return <form>{fields.map((field) => renderField(field))}</form>;
}
