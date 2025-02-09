fetchData(); // 调用函数

async function fetchData() {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1:free",
          "messages": [
            {"role": "user", "content": "What is the meaning of life?"}
          ],
          "top_p": 1,
          "temperature": 1,
          "repetition_penalty": 1
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // 将响应解析为 JSON
      displayOutput(data); // 将数据展示到页面中
    } catch (error) {
      displayOutput({ error: error.message }); // 如果有错误，展示错误信息
    }
  }

  function displayOutput(data) {
    const outputElement = document.getElementById("output");
    outputElement.textContent = data.choices[0].message.content; // 格式化输出
    // outputElement.textContent = json.stringify(data,null,2)

  }

