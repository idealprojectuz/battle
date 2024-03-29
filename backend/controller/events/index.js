const MyFn = require("../../utils/ShablonTryCatch");
const { sqlData } = require("../../utils/SqlData");
const validate = require("./validate");

const Get = async (_, res) => {
  const data = await sqlData(`SELECT e.id, e.stadions, 
  CONCAT('[', GROUP_CONCAT(JSON_OBJECT('goal_id', g.id, 'round', g.round, 'clubid',g.clubid, 'events_id',g.eventsid)), ']') AS gollar
FROM events e
LEFT JOIN gools g ON e.id = g.eventsid
GROUP BY e.id`);
  res.status(200).json({ status: 200, data });
};

const Add = async (req, res) => {
  const { error, value } = validate.post.validate(req.body);
  if (error) {
    res.status(403).json({
      status: 403,
      message: String(error["details"][0].message),
      success: false,
    });
    return;
  }

  const newData = await sqlData(
    "INSERT INTO events (command1, command2, stadions, categoryid, eventtime, additiontime) VALUES (?,?,?,?,?,?)",
    value.command1,
    value.command2,
    value.stadions,
    value.categoryid,
    value.eventtime,
    value.additiontime
  );
  res.status(200).json({
    status: 200,
    data: newData,
    message: `Muvaffaqiyatli saqlandi`,
  });
};

const Edit = async (req, res) => {
  const { error, value } = validate.put.validate(req.body);
  if (error) {
    res.status(403).json({
      status: 403,
      message: String(error["details"][0].message),
      success: false,
    });
    return;
  }

  const oldData = await sqlData(
    "select * from events where id = ? limit 1",
    req.params.id
  );
  if (!oldData.length) {
    res.status(404).json({
      status: 404,
      message: `Ma'lumot topilmadi`,
      success: false,
    });
    return;
  }

  const updated = await sqlData(
    "update events set command1 = ?, command2 = ?, stadions = ?, categoryid = ?, eventtime = ?, additiontime = ?  where id  = ?",
    value.command1 || oldData[0]?.command1,
    value.command2 || oldData[0]?.command2,
    value.stadions || oldData[0]?.stadions,
    value.categoryid || oldData[0]?.categoryid,
    value.eventtime || oldData[0]?.eventtime,
    value.additiontime || oldData[0]?.additiontime,
    req.params.id
  );
  res.status(200).json({
    status: 200,
    success: true,
    data: updated,
    message: `Muvaffaqiyatli yangilandi`,
  });
};

const GetById = async (req, res) => {
  const data = await sqlData(
    `SELECT e.id, e.stadions, 
    CONCAT('[', GROUP_CONCAT(JSON_OBJECT('goal_id', g.id, 'round', g.round, 'clubid',g.clubid, 'events_id',g.eventsid)), ']') AS gollar,
    CONCAT('[', GROUP_CONCAT(JSON_OBJECT('club_id', c.id, 'club_name', c.name, 'club_logo',c.logo)), ']') AS club1,
    CONCAT('[', GROUP_CONCAT(JSON_OBJECT('club_id', cl.id, 'club_name', cl.name, 'club_logo',cl.logo)), ']') AS club2,
    CONCAT('[', GROUP_CONCAT(JSON_OBJECT('stadion_name', s.name)), ']') AS stadion,
    CONCAT('[', GROUP_CONCAT(JSON_OBJECT('category_name', ca.name)), ']') AS category
  FROM events e
  LEFT JOIN gools g ON e.id = g.eventsid
  LEFT JOIN clubs c ON e.command1 = c.id
  LEFT JOIN clubs cl ON e.command2 = cl.id
  LEFT JOIN stadions s ON e.stadions = s.id
  LEFT JOIN category ca ON e.categoryid = ca.id
  where e.id = ?
  GROUP BY e.id`,
    req.params.id
  );
  if (!data.length) {
    res.status(403).json({
      status: 403,
      message: "Ma'lumot topilmadi",
      success: false,
    });
    return;
  }
  res.status(200).json({ status: 200, data: data[0] });
};

const Delete = async (req, res) => {
  const deleted = await sqlData(
    "DELETE FROM events WHERE id = ?",
    req.params.id
  );

  if (!deleted) {
    res.status(403).json({
      status: 403,
      message: "Ma'lumot topilmadi",
      success: false,
    });
    return;
  }
  res.status(200).json({ status: 200, data: deleted, message: "O'chirildi!" });
};

class CategoryController {
  async Get(req, res) {
    MyFn(req, res, Get);
  }
  async Add(req, res) {
    MyFn(req, res, Add);
  }
  async Edit(req, res) {
    MyFn(req, res, Edit);
  }
  async GetById(req, res) {
    MyFn(req, res, GetById);
  }
  async Delete(req, res) {
    MyFn(req, res, Delete);
  }
}
module.exports = new CategoryController();
