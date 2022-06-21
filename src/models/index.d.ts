import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PlacesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Places {
  readonly id: string;
  readonly name?: string | null;
  readonly imageurl?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Places, PlacesMetaData>);
  static copyOf(source: Places, mutator: (draft: MutableModel<Places, PlacesMetaData>) => MutableModel<Places, PlacesMetaData> | void): Places;
}