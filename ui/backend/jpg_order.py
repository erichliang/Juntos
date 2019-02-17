import glob
img_list = []
for i, img_name in enumerate(glob.glob("/home/ubuntu/UTKFace/*.jpg")):
    img_list.append(img_name)
f = open("img_list.txt", "w")
f.write('\n'.join(img_list))
