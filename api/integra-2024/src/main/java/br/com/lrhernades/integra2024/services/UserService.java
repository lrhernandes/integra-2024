package br.com.lrhernades.integra2024.services;

import br.com.lrhernades.integra2024.entity.User;
import org.springframework.stereotype.Service;
import br.com.lrhernades.integra2024.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public record UserService(UserRepository userRepository) {
    
    public User salvar(User user){
        return userRepository.save(user);
    }
    
    public List<User> listarTodos() {
        return userRepository.findAll();
    }
    
    public User listarPorId(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.orElse(null);
    }
    
    public User editar(Long id, User user) {
        if (userRepository.existsById(id)) {
            user.setId(id);
            return userRepository.save(user);
        }
        return null; // or throw an exception indicating user not found
    }
    
    public void deletar(Long id) {
        userRepository.deleteById(id);
    }
}
