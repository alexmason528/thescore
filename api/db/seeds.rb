rushings = JSON.parse(File.read('rushing.json'))

rushings.each do |params|
  is_touchdown = params['Lng'].instance_of?(String) && params['Lng'][-1] == 'T'

  rushing = {
    'player' => params['Player'],
    'team' => params['Team'],
    'pos' => params['Pos'],
    'att' => params['Att'],
    'att_g' => params['Att/G'],
    'yds' => params['Yds'].instance_of?(String) ? params['Yds'].delete(',').to_f : params['Yds'],
    'avg' => params['Avg'],
    'yds_g' => params['Yds/G'],
    'td' => params['TD'],
    'lng' => is_touchdown ? params['Lng'][0...-1].to_f : params['Lng'].to_f,
    'touchdown' => is_touchdown,
    'fir' => params['1st'],
    'first_percent' => params['1st%'],
    'twenty_plus' => params['20+'],
    'forty_plus' => params['40+'],
    'fum' => params['FUM'],
  }

  Rushing.create(rushing)
end
