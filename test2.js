const postURL = "https://jsonplaceholder.typicode.com/todos";

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

 // 두 번째 fetch 호출은 첫 번째 fetch의 콜백 내부에서 실행되어야 함

    fetch(postURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // 올바른 헤더 이름 사용
        },
        body: JSON.stringify(postData),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

        });