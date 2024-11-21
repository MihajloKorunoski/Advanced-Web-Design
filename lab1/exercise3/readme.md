# Функција за Проверка на Типот на Леб во Сендвичи

Креирај функција која на влез ќе прима две низи составени од стрингови, кои претставуваат состав на два сендвича. Целта на оваа функција е да спореди дали сендвичите се направени од ист тип на леб, така што лебот е секогаш поставен на почетокот и крајот на низата.

---

## Пример како треба да изгледа функцијата:

```javascript
hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
) ➞ true
```

---

## Примери за Влез и Излез:

| Влез                                                                                  | Резултат |
|---------------------------------------------------------------------------------------|----------|
| `["white bread", "lettuce", "white bread"]`, `["white bread", "tomato", "white bread"]` | `true`   |
| `["brown bread", "lettuce", "white bread"]`, `["white bread", "tomato", "white bread"]` | `false`  |
| `["white bread", "lettuce", "white bread"]`, `["brown bread", "lettuce", "brown bread"]` | `false`  |
