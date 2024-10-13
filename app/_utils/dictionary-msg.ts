import { Dictionary } from "../_dictionaries/type";

type MessageKey = keyof Dictionary;

export default function dictionaryMsg<T extends MessageKey>(key: T): T {
    return key;
}
