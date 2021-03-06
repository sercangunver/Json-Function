import { isArray, isString } from '../../../utils/type-check';

interface WhereToolObject {
  lt: (input: number) => (value: any) => boolean,
  lte: (input: number) => (value: any) => boolean,
  gt: (input: number) => (value: any) => boolean,
  gte: (input: number) => (value: any) => boolean,
  eq: (input: any) => (value: any) => boolean,
  ne: (input: any) => (value: any) => boolean,
  in: (input: any) => (value: any) => boolean,
  nin: (input: any) => (value: any) => boolean,
  between: (min: number, max: number) => (value: any) => boolean,
  oneOf: (input: any) => (value: any[] | string) => boolean, 
}


const whereToolObject: WhereToolObject = {
  lt: (input) => (value) => value < input,
  lte: (input) => (value) => value <= input,
  gt: (input) => (value) => value > input,
  gte: (input) => (value) => value >= input,
  eq: (input) => (value) => value == input,
  ne: (input) => (value) => value != input,
  in: (input) => (value) => (isArray(value) || isString(value)) && value.includes(input),
  nin: (input) => (value) => (isArray(value) || isString(value)) && !value.includes(input),
  between: (min, max) => (value) => value >= min && value <= max,
  oneOf: (input) => (value) => (isArray(input) || isString(input)) && input.includes(value),
};

export default whereToolObject;
