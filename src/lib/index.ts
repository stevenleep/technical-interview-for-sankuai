import { Modal } from "antd";

export const confirm = (props: any) => {
  return new Promise<boolean>((resolve, reject) => {
    Modal.confirm({
      ...props,
      onOk: () => resolve(true),
      onCancel: () => resolve(false),
    });
  });
};