"use client";
/* eslint-disable @next/next/no-img-element */
import { createRequest, listRequests } from "@/database/functions";
import { Request } from "@/database/dataclasses";
import { useEffect, useState } from "react";

export default function AdminPage() {
    const [requests, setRequests] = useState<Array<Request>>([]);

    const fetchRequests = async () => {
        const requests = await listRequests();
        setRequests(requests);
    };
    useEffect(() => {
        fetchRequests();
    }, []);

    return (
        <body style={{ overflowX: "hidden", margin: "0", padding: "0" }}>
            <main
                style={{
                    color: "white",
                    margin: "0",
                    padding: "0",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginTop: "1em",
                    }}
                >
                    Painel de Adm
                </h1>
                <h4
                    style={{
                        textAlign: "center",
                        marginTop: "-.5em",
                        marginBottom: "3em",
                    }}
                >
                    Requisições das Empresas
                </h4>

                <div
                    style={{
                        display: "grid",
                        gap: "50px 50px",
                        gridTemplateColumns: "1fr 1fr",
                        maxWidth: "1000px",
                        margin: "auto",
                    }}
                >
                    {requests.map((request) => {
                        return (
                            <div
                                key={`request-${request.id}`}
                                style={{
                                    backgroundColor: "#222",
                                    padding: "1em 2em 1em 2em",
                                    borderRadius: "1em",
                                }}
                            >
                                <h3>
                                    {request.name}{" "}
                                    <span style={{ color: "#bbb" }}>
                                        ({request.email})
                                    </span>
                                </h3>
                                <p>{request.description}</p>
                                <img
                                    src={request.imageUrl}
                                    alt="Image"
                                    style={{
                                        width: "100%",
                                        marginTop: "1em",
                                        marginBottom: "1em",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                <div style={{ height: "3em" }} />
            </main>
        </body>
    );
}
