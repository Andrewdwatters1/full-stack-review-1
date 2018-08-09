SELECT p.*, u.name 
FROM posts p 
JOIN users u ON p.user_id = u.id;