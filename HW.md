| Задание                     | Ответ           | 
| -------------              |:-------------:| 
| 1. Посмотреть, где я                  | **pwd** | 
| 2. Создать папку                  | **mkdir foldername** |   
| 3. Зайти в папку | **cd foldername**|        
| 4. Создать 3 папки |  **mkdir foldername1 foldername2 foldername3**   или  **mkdir {foldername1,foldername2,folername3}** |
| 5. Зайти в любую папку             | **cd foldername1**|    
| 6. Создать 5 файлов(3 txt, 2 json)              | **touch {file_1.txt, file_2.txt, file_3.txt, file_4.json, file_5.json}** или **touch file_1.txt file_2.txt file_3.txt    file_4.json file_5.json**      |  
| 7. Создать 3 папки              | **mkdir foldername1 foldername2 foldername3**   или  **mkdir {foldername1,foldername2,folername3}**      |  
| 8. Вывести список содержимого папки  | **● ls** – список файлов   или **● ls -al**  – форматированный список, включающий скрытые каталоги и файлы     |  
| 9. Открыть любой txt файл            | **vim file_1.txt** |  
| 10. Написать туда что-нибудь, любой текст        | **перейти в режим «Insert» нажатием клавиши  «I» → ввести текст**     |  
| 11. Сохранить и выйти              | **нажать клавишу “Esc” → ввести :wq → нажать клавишу “Enter”**      |  
| 12. Выйти из папки на уровень выше              | **cd ..**– переход на уровень вверх  или **cd -**  –возврат в предыдущую папку      |  
| 13. Переместить любые 2 файла, которые вы создали, в любую другую папку              | **mv foldername1/file_1.txt foldername1/file_2.txt /e/gitbush/foldername/foldername3**      |  
| **при нахождении в папке foldername1:*              | **mv file_1.txt file_2.txt  ../foldername3** (*папка foldername содержит папки foldername1 и foldername3)*      |  
| 14. Скопировать любые 2 файла, которые вы создали, в любую другую папку              | **cp foldername1/file_3.txt foldername1/file_4.json foldername2**      |  
| **При нахождении в папке foldername1:*              | **cp file_3.txt file_4.json ../foldername2** (*папка foldername содержит папки foldername1 и foldername3)*   |  
| 15. Найти файл по имени              | **find -name "filename.txt"**(e.g. find -name file_5.json) **если файл в директории выше, то указываем путь find /path/to/search -name filename.txt(e.g. find /e/gitbush -name file_5.json)*      |  
| 16. Просмотреть содержимое в реальном времени (команда grep) изучите как она работает: | **tail -f filename** и/или **tail -f filename | grep --line-buffered searchword**(*просмотреть наличие в документе конкретного слова в режиме реального времени)*      |  
| 17. Вывести несколько первых строк из текстового файла             | **head -2 filename.txt**      | 
| 18. Вывести несколько последних строк из текстового файла              | **tail -2 filename.txt**    | 
| 19. Просмотреть содержимое длинного файла (команда less) изучите как она работает              | **less +f filename**     | 
| 20. Вывести дату и время              | **date**      | 




## Задание *
- Отправить http запрос на сервер: 

curl http://162.55.220.72:5005/terminal-hw-request

`curl “http://162.55.220.72:5005/get_method?name=(set_your_String)&age=(set_your_number)”`
В поле "*set_your_String*" указываем имя, в поле "*set_your_number*" – возраст. E.g. `curl http://162.55.220.72:5005/get_method?name=(Nastya)&age=(26)`

- Написать скрипт который выполнит автоматически пункты 3, 4, 5, 6, 7, 8, 13:
  - Создаем новый файл: **touch myscript.sh**
  - Открываем данный файл: **vim touch myscript.sh**
  - Переходим в режим “Insert”, нажав клавишу “I”
  - Вносим требуемые команды:

```bash
#!/bin/bash
Pwd
cd foldername
mkdir foldername1 foldername2 foldername3
cd foldername1
touch file_1.txt file_2.txt file_3.txt file_4.json file_5.json
mkdir foldername1.1 foldername2.1 foldername3.1
ls -al
mv file_1.txt file_2.txt ../foldername3
```

   +  Производим сохранение документа: нажимаем клавишу « Esc», вносим **:wq**, нажимаем клавишу “Enter”
   - Воспроизводим скрипт: **Bash myscript.sh**  или **./myscript.sh**