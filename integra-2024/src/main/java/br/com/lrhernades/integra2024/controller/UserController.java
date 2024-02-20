package br.com.lrhernades.integra2024.controller;

import br.com.lrhernades.integra2024.entity.User;
import org.springframework.web.bind.annotation.*;
import br.com.lrhernades.integra2024.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/user")
public record UserController(UserService userService) {

    @PostMapping
    public User salvar(@RequestBody User user){
        return userService.salvar(user);
    }
    
    @GetMapping
    public List listarTodos() {
        return userService.listarTodos();
    }
    
    @GetMapping("/{id}")
    public User listarPorId(@PathVariable Long id) {
        return userService.listarPorId(id);
    }
    
    @PutMapping("/{id}")
    public User editar(@PathVariable Long id, @RequestBody User user) {
        return userService.editar(id, user);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        userService.deletar(id);
    }
}
