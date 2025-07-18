package com.rpg.rpg_ficha.service;


import com.rpg.rpg_ficha.dto.gemini.Content;
import com.rpg.rpg_ficha.dto.gemini.GeminiRequest;
import com.rpg.rpg_ficha.dto.gemini.GeminiResponse;
import com.rpg.rpg_ficha.dto.gemini.Part;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import java.io.IOException;
import java.util.Collections;

@Service
public class AiService {

    @Value("${google.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String gerarHistoria(String nome, String raca, String classe) {
        String apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=" + apiKey;
        String promptText = String.format(
                "Crie uma história de background para um personagem de RPG chamado %s, um(a) %s da classe %s. " +
                        "A história deve ter um tom de fantasia épica, ser criativa e ter entre 2 a 4 parágrafos.",
                nome, raca, classe
        );

        Part part = new Part(promptText);
        Content content = new Content(Collections.singletonList(part));
        GeminiRequest geminiRequest = new GeminiRequest(Collections.singletonList(content));

        GeminiResponse response = restTemplate.postForObject(apiUrl, geminiRequest, GeminiResponse.class);

        if (response != null) {
            return response.text();
        } else {
            throw new RuntimeException("A chamada para a API da IA retornou uma resposta nula.");
        }
    }
}
