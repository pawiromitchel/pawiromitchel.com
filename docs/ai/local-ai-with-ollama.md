---
title: Run your own local AI model with Ollama
description: Ollama
---

# Ollama
Ollama :llama: is a way of running large language model locally, it's like running ChatGPT on your own machine. Of course, this means that the answers are generated on your machine, so you'll need a beefy one.

My `screenfetch` output:
```
 ██████████████████  ████████     trustm3@trustm3
 ██████████████████  ████████     OS: Manjaro 24.0.1 Wynsdey
 ██████████████████  ████████     Kernel: x86_64 Linux 6.9.2-1-MANJARO
 ██████████████████  ████████     Uptime: 8h 8m
 ████████            ████████     Packages: 1277
 ████████  ████████  ████████     Shell: zsh 5.9
 ████████  ████████  ████████     Resolution: 1920x1080
 ████████  ████████  ████████     DE: KDE
 ████████  ████████  ████████     WM: KWin
 ████████  ████████  ████████     GTK Theme: Breeze-Dark [GTK2], Breeze [GTK3]
 ████████  ████████  ████████     Icon Theme: breeze
 ████████  ████████  ████████     Disk: 280G / 920G (32%)
 ████████  ████████  ████████     CPU: 13th Gen Intel Core i5-13420H @ 12x 4.6GHz [42.0°C]
 ████████  ████████  ████████     GPU: NVIDIA GeForce RTX 3050 6GB Laptop GPU
                                  RAM: 3954MiB / 31822MiB
```

An example output of running Ollama
![image](https://github.com/pawiromitchel/pawiromitchel.com/assets/11035568/cd5c31f8-fa83-44f7-9131-6727cf1fa875)


## Installation
Go to the [download page of Ollama](https://ollama.com/download) and choose your operating system. Then, follow the instructions for installation.

- :simple-apple: [macOS](https://ollama.com/download/Ollama-darwin.zip)
- :window: [windows](https://ollama.com/download/OllamaSetup.exe)
- :simple-linux: linux: `curl -fsSL https://ollama.com/install.sh | sh`

## Usage
After the installation, you should be able to use it immidiately. You can find all available models [here](https://ollama.com/library)

We'll be using [Llama 3](https://ollama.com/library/llama3) in this example run `ollama pull llama3`
You should be seeing something like this
```
ollama pull llama3
pulling manifest 
pulling 6a0746a1ec1a... 100% ▕███████████████████████████████████████▏ 4.7 GB                         
pulling 4fa551d4f938... 100% ▕███████████████████████████████████████▏  12 KB                         
pulling 8ab4849b038c... 100% ▕███████████████████████████████████████▏  254 B                         
pulling 577073ffcc6c... 100% ▕███████████████████████████████████████▏  110 B                         
pulling 3f8eb4da87fa... 100% ▕███████████████████████████████████████▏  485 B                         
verifying sha256 digest 
writing manifest 
removing any unused layers 
success 
```

Now you can run the `llama3` model `ollama run llama3` and ask it whatever you want
![image](https://github.com/pawiromitchel/pawiromitchel.com/assets/11035568/e44ef7bc-8922-48a7-8133-a1ef39ef090f)

## Next steps
With this running, possibilities are endless 🚀 

### REST API
https://github.com/ollama/ollama/blob/main/docs/api.md
```
curl -X POST http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt":"Why is the sky blue?"
 }'
```

### Github Copilot alternative
There's this VSCode extension that you can configure to use Ollama to become your Github Copilot replacement called [Continue](https://docs.continue.dev/how-to-use-continue#easily-understand-code-sections)

After installing it you should be seeing a new icon in your sidebar to ask questions related to your code (give it time to index)
![image](https://github.com/pawiromitchel/pawiromitchel.com/assets/11035568/7665000a-7fa1-488f-a581-75672b8e780d)

### ChatGPT UI
You can run your own [WebUI](https://github.com/open-webui/open-webui) that has Retrieval Augmented Generation (RAG) support and more.

### SDK's
There are [SDKs](https://github.com/ollama/ollama/blob/main/README.md#libraries) available if you want to integrate the models into your existing apps 

## Conclusion
It's so easy to run a complex AI model locally nowaways, have a look into [Huggingface](https://huggingface.co/) as well. 