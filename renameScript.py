import glob, os

path = raw_input("Folder Path: (drag folder here)")
ext = raw_input("extention (i.e. 'pdf' no quotes): ")

def rename(pattern, dir = '../../../%s/' % (path[1:-1]), titlePattern = r'%s'):
    counter = 0
    for pathAndFilename in glob.iglob(os.path.join(dir, pattern)):
        print pathAndFilename
        title, ext = os.path.splitext(os.path.basename(pathAndFilename))
        if title[0:2] == '20':
            counter += 1
            title = title[2:]
            os.rename(pathAndFilename,
                  os.path.join(dir, titlePattern % title + ext))
    return counter
counter = rename(r'*.%s' % (ext), r'../../../%s/' % (path[1:-1]))
print 'Done. Files renamed: ', counter
