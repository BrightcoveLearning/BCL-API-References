package main

import (
    "bytes"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &http.Client{}

    body := []byte("{\n  \"key-data\": {\n    \"account-id\": \"123456789001\",\n    \"allowed-domains\": [\n      \"http://www.abc.com\",\n      \"https://www.abc.com\",\n      \"http://www.xyz.com\",\n      \"https://www.xyz.com\"\n    ]\n  }\n}")

    req, _ := http.NewRequest("POST", "https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys", bytes.NewBuffer(body))

    req.Header.Add("Authorization", "Bearer {token}")
    req.Header.Add("Content-Type", "application/json")

    resp, err := client.Do(req)

    if err != nil {
        fmt.Println("Errored when sending request to the server")
        return
    }

    defer resp.Body.Close()
    resp_body, _ := ioutil.ReadAll(resp.Body)

    fmt.Println(resp.Status)
    fmt.Println(string(resp_body))
}