import { BaseEntity } from "./model";

const addEntity = <T extends BaseEntity>(collection: T[], entity: T): T[] => [...collection, entity];
const updateEntity = <T extends BaseEntity>(collection: T[], entity: T): T[] =>
  collection.map((e) => (e.id === entity.id ? Object.assign({}, entity) : e));
const deleteEntity = <T extends BaseEntity>(collection: T[], entity: T): T[] =>
  collection.filter((e) => e.id !== entity.id);

export { addEntity, updateEntity, deleteEntity}