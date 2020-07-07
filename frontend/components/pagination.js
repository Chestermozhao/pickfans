import { Pagination } from "react-bootstrap";

const _Pagination = props => (
  <Pagination>
    <Pagination.First />
    <Pagination.Prev />

    {props.activeNum - 2 > 0 ? (
      <Pagination.Item>{props.activeNum - 2}</Pagination.Item>
    ) : (
      ""
    )}
    {props.activeNum - 1 > 0 ? (
      <Pagination.Item>{props.activeNum - 1}</Pagination.Item>
    ) : (
      ""
    )}
    <Pagination.Item active>{props.activeNum}</Pagination.Item>
    {props.activeNum + 1 <= props.totalNum ? (
      <Pagination.Item>{props.activeNum + 1}</Pagination.Item>
    ) : (
      ""
    )}
    {props.activeNum + 2 <= props.totalNum ? (
      <Pagination.Item>{props.activeNum + 2}</Pagination.Item>
    ) : (
      ""
    )}

    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
);

export default _Pagination;
