import { collection, addDoc, getDocs } from "firebase/firestore";
import { Request } from "./dataclasses";
import { firestore } from "./firebase";

const companiesCollection = collection(firestore, "Companies");

export const createRequest = (company: Request) =>
    addDoc(companiesCollection, company);

export const listRequests = () =>
    getDocs(companiesCollection).then((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id } as Request;
        })
    );
