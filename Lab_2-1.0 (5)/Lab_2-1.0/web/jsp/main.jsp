<%@ page import="model.Point" %>
<%@ page import="java.util.Collections" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<jsp:useBean id="history" type="beans.History" scope="session"/>
<html>
<head>
    <meta charset="UTF-8">
    <title>Web 2</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/web/styles/main.css">
</head>
<body>
<div class="head">
        <span id="head-title">
            Лабораторная работа по веб-программированию №2: вариант 3169
        </span>
    <br>
    <span id="head-author">
            Волкова Елена P3212
    </span>
</div>
<div class="main">
    <h1>Определение попадания точки в заданную область</h1>
    <form id="main-form" action="" method="post">
        <canvas height="300px" width="300px"></canvas>
        <h2>Выберите значение радиуса R</h2>
        <button type="button" class="r-button" value="1">1</button>
        <button type="button" class="r-button" value="1.5">1.5</button>
        <button type="button" class="r-button" value="2">2</button>
        <button type="button" class="r-button" value="2.5">2.5</button>
        <button type="button" class="r-button" value="3">3</button>
        <input type="hidden" name="offset">
        <p class="warn-checkbox" hidden>Не выбрано значение радиуса</p>
        <h2>Введите координату X</h2>
        <label>
            <input type="text" name="X" placeholder="от 2 до 5" maxlength="15">
        </label>
        <p class="warn-checkbox" hidden>Введено не число</p>
        <p class="warn-checkbox" hidden>Число выходит за пределы интервала </p>
        <h2>Введите координату Y</h2>
        <label>
            <input type="text" name="Y" placeholder="от -3 до 5" maxlength="15">
        </label>
        <input type="hidden" name="R">
        <p class="warn-checkbox" hidden>Введено не число</p>
        <p class="warn-checkbox" hidden>Число выходит за пределы интервала </p>
        <br>
        <button type="submit" class="submit-button">Проверить</button>
        <button type="button" class="submit-button" style="margin-left: 20px">Очистить</button>
    </form><br>
    <%if (history.getList().size()>0){%>
    <h1>История запросов</h1>
    <table id="result-table">
        <tr id="table-headers"><th>Координата X</th><th>Координата Y</th><th>Радиус R</th><th>Результат</th><th>Время работы</th></tr>
        <%
            List<Point> list = history.getList();
            Collections.reverse(list);
            for (Point p : list){%>
        <tr><td><%=p.getX()%></td><td><%=p.getY()%></td><td><%=p.getR()%></td><td><%=p.isInArea()%></td><td><%=p.getTime()%></td></tr>
        <%}%>
    </table>
    <%}%>
</div>
<script src="${pageContext.request.contextPath}/web/scripts/drawing.js"></script>
<script src="${pageContext.request.contextPath}/web/scripts/main.js"></script>
<script src="${pageContext.request.contextPath}/web/scripts/ajax.js"></script>
</body>
</html>
